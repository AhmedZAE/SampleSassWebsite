


function generateAudioFileAsync(audioName, successCallback, faliureCallback){

    console.log('generating audio file ...');
    setTimeout(function() {

        let error = false;
        if(!error) {
            console.log('audio file generated.');
            console.log('.');
            
            successCallback({fileName: audioName, location: 'local\\audios'});
        }else{
            faliureCallback('an error occured while generating the audio file.');
        }
    }, 3000);
};

function accessAudioFileAsync(audioFile, successCallback, faliureCallback){

    console.log('accessing audio file ...');
    setTimeout(function() {

        let error = false;
        if (!error){
            console.log('audio file access granted.');
            console.log('.');

            successCallback({audioPath: audioFile.location + '\\' + audioFile.fileName, accessKey: 'abc123'});
        }else{
            faliureCallback('an error occured while accessing the audio file.');
        }
        
    }, 2000);
}

function runAudioFileAsync(audioData, successCallback, faliureCallback){

    console.log('running audio file ...');
    setTimeout(function() {

        let error = false;
        if (!error){
            console.log('audio file run.');
            console.log('.');

            successCallback({audioFile: audioData.audioPath, audioTrack: '5522545'});
        }else{
            faliureCallback('an error occured while running the audio file.');
        }
        
    }, 5000);
}

function testAudioFileAsync(runData, successCallback, faliureCallback){

    console.log('testing audio file ...');
    setTimeout(function() {

        let error = false;
        if (!error){
            console.log('audio file tested.');
            console.log('.');

            successCallback({audioFile: runData.audioFile, testResult: 'failed'});
        }else{
            faliureCallback('an error occured while testing the audio file.');
        }
        
    }, 1000);
}

function fixAudioFileAsync(testData, successCallback, faliureCallback){

    console.log('fixing audio file ...');
    setTimeout(function() {

        let error = false;
        if (!error){
            console.log('audio file fixed.');
            console.log('.');

            successCallback(testData.audioFile);
        }else{
            faliureCallback('an error occured while fixing the audio file.');
        }
        
    }, 2000);
}

function uploadAudioFileAsync(fixedAudioFile, successCallback, faliureCallback){

    console.log('uploading audio file ...');
    setTimeout(function() {

        let error = false;
        if (!error){
            console.log('audio file uploaded.');
            console.log('.');

            successCallback('www.somethin.com');
        }else{
            faliureCallback('an error occured while uploading the audio file.');
        }
        
    }, 2000);
}




function reportError(error){
    console.log('error: ' + error);
}




generateAudioFileAsync('audio.mp3', function(audioFile){
    accessAudioFileAsync(audioFile, function(audioData){
        runAudioFileAsync(audioData, function(runData){
            testAudioFileAsync(runData, function(testData){
                fixAudioFileAsync(testData, function(fixedAudioFile){
                    uploadAudioFileAsync(fixedAudioFile, function(url){

                        console.log('Audio file is ready to open at: ' + url);

                    }, reportError)
                }, reportError)
            }, reportError)
        }, reportError)
    }, reportError)
}, reportError);

