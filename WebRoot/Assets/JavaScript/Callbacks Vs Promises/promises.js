




function generateAudioFileAsync(audioName){

    return new Promise((resolve, reject) =>
    {
        console.log('generating audio file ...');
        setTimeout(function() {

            let error = false;
            if(!error) {
                console.log('audio file generated.');
                console.log('.');

                resolve({fileName: audioName, location: 'local\\audios'});
            }else{
                reject('an error occured while generating the audio file.');
            }
        }, 3000);
    });
};

function accessAudioFileAsync(audioFile){

    return new Promise((resolve, reject) =>
    {
        console.log('accessing audio file ...');
        setTimeout(function() {

            let error = false;
            if (!error){
                console.log('audio file access granted.');
                console.log('.');

                resolve({audioPath: audioFile.location + '\\' + audioFile.fileName, accessKey: 'abc123'});
            }else{
                reject('an error occured while accessing the audio file.');
            }
            
        }, 2000);
    });
};

function runAudioFileAsync(audioData){

    return new Promise((resolve, reject) =>
    {
        console.log('running audio file ...');
        setTimeout(function() {
    
            let error = false;
            if (!error){
                console.log('audio file run.');
                console.log('.');

                resolve({audioFile: audioData.audioPath, audioTrack: '5522545'});
            }else{
                reject('an error occured while running the audio file.');
            }
            
        }, 5000);
    });
};

function testAudioFileAsync(runData){

    return new Promise((resolve, reject) =>
    {
        console.log('testing audio file ...');
        setTimeout(function() {
    
            let error = false;
            if (!error){
                console.log('audio file tested.');
                console.log('.');

                resolve({audioFile: runData.audioFile, testResult: 'failed'});
            }else{
                reject('an error occured while testing the audio file.');
            }
            
        }, 1000);
    });
};

function fixAudioFileAsync(testData){

    return new Promise((resolve, reject) =>
    {
        console.log('fixing audio file ...');
        setTimeout(function() {

            let error = true;
            if (!error){
                console.log('audio file fixed.');
                console.log('.');

                resolve(testData.audioFile);
            }else{
                reject('an error occured while fixing the audio file.');
            }
            
        }, 2000);
    });
};

function uploadAudioFileAsync(fixedAudioFile){

    return new Promise((resolve, reject) =>
    {
        console.log('uploading audio file ...');
        setTimeout(function() {
    
            let error = false;
            if (!error){
                console.log('audio file uploaded.');
                console.log('.');

                resolve('www.somethin.com');
            }else{
                reject('an error occured while uploading the audio file.');
            }
            
        }, 2000);
    });
};




function reportError(error){
    console.log('error: ' + error);
}

function logResult(url){
    console.log(`Audio file is ready to open at: ${url}`);
}




// --- Async & Await syntactical sugar, which makes the async process much easier to understand --- //

async function processAudioFile(){

    const generatedFile = await generateAudioFileAsync('audio.mp3');
    const accessKey = await accessAudioFileAsync(generatedFile);
    const runInfo = await runAudioFileAsync(accessKey);
    const testData = await testAudioFileAsync(runInfo);
    const fixedFile = await fixAudioFileAsync(testData);
    
    return await uploadAudioFileAsync(fixedFile);
}

processAudioFile().then(logResult).catch(reportError);




// --- The awesome benefit of using promises --- //

// generateAudioFileAsync('audio.mp3')
//     .then(accessAudioFileAsync)
//     .then(runAudioFileAsync)
//     .then(testAudioFileAsync)
//     .then(fixAudioFileAsync)
//     .then(uploadAudioFileAsync)
//     .then(logResult)
//     .catch(reportError);




// --- Some Stupid ass way of whatever that does --- //

// const applyAsync = (acc, val) => acc.then(val);
// const composeAsync = (...funcs) => (initial, resolve, reject) => funcs.reduce(applyAsync, Promise.resolve(initial)).then(resolve).catch(reject);


// const audioProcessChain =
//  composeAsync(generateAudioFileAsync, 
//                 accessAudioFileAsync, 
//                 runAudioFileAsync, 
//                 testAudioFileAsync, 
//                 fixAudioFileAsync,
//                 uploadAudioFileAsync);

// audioProcessChain('audio.mp3', logResult, reportError);