const LoadingIndicator = () => {

    return(
        <>
            <div className="flex items-center justify-center space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-emerald-600 rounded-full"/>
                <div className="w-4 h-4 bg-emerald-600 rounded-full"/>
                <div className="w-3 h-3 bg-emerald-600 rounded-full"/>
            </div>
        </>
    )
}

export default LoadingIndicator
