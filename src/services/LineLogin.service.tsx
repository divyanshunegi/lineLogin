export default class LineLoginService {
    private static _instance: LineLoginService | null = null

    private constructor() {}

    public static getInstance = () : LineLoginService | null => {
        if(LineLoginService._instance === null) {
            LineLoginService._instance = new LineLoginService()
        }
        return LineLoginService._instance
    }

    public getAccessToken = async (code: string) => {
        const rawResponse = await fetch('https://api.line.me/oauth2/v2.1/token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "grant_type=authorization_code&code=" + code + "&redirect_uri=http://localhost:3000/callback&client_id=1656797734&client_secret=2f7b9c56777928fa61e185abf41196fb&code_verifier="
        });
        return await rawResponse.json()
    }

    public getUserProfile = async (code: string) => {
        const data = await this.getAccessToken(code);
        if (data.access_token) {
            const rawResponse = await fetch('https://api.line.me/v2/profile', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+data.access_token
                }
            });
            return await rawResponse.json()
        } else {
            return {error: data.error_description}
        }
    }
}
