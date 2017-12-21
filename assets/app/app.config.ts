export const appConfig = {
    
    apiUrl: 'http://172.16.1.128:3001/',
    
    connectionStrings: [
        {   FCX: {
                user:  "sa",
                password: "nimda.",
                server: "172.16.1.27",
                database: "Fincredix" ,
                },
        },
        {
            CS: {
                user:  "sa",
                password: "nimda.",
                server: "172.16.1.27",
                database: "FinRealCS" ,
            }
        }
    ]
};