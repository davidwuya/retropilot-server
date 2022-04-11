var config = {
    applicationSalt: 'RANDOM_SEED',
    
    databaseFile: 'database.sqlite',
    
    allowAccountRegistration: true,
    
    httpInterface: '127.0.0.1',
    httpPort:  3000,
    
    httpsInterface: '127.0.0.1',
    httpsPort:  4430,
    sslKey: 'certs/retropilot.key',
    sslCrt: 'certs/retropilot.crt',

    baseUrl: 'http://retropilot.davidzhu.tech:3000/',  // base url of the retropilot server
    baseUploadUrl: 'http://retropilot.davidzhu.tech/backend/post_upload', // base url sent to devices for POSTing drives & logs
    
    baseDriveDownloadUrl: 'http://192.168.1.165:3000/realdata/', // base download url for drive & log data
    baseDriveDownloadPathMapping: '/realdata', // path mapping of above download url for expressjs, prefix with "/"
    storagePath: 'realdata/', // relative or absolute ( "/..." for absolute path )

    cabanaUrl: 'http://retropilot.davidzhu.tech/cabana/index.html',

    deviceStorageQuotaMb: 200000,
    deviceDriveExpirationDays: 30,
    

    welcomeMessage: `<><><><><><><><><><><><><><><><><><><><><><><br>2021 RetroPilot`
};

module.exports = config;
