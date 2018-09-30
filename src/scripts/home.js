account = {
  name: 'abhivivlil2',
  sas: '?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-09-30T20:39:59Z&st=2018-09-30T12:39:59Z&spr=https&sig=0Ma3qvlw%2BfjrISe9Q8mMRawfQbNvUoobOvkdR4J4nIU%3D'
};
blobUri = 'https://' + account.name + '.blob.core.windows.net/pics';
blobService = AzureStorage.Blob.createBlobServiceWithSas(blobUri, account.sas);

function uploadFiles()
{
  file = document.getElementById('fileinput').files[0];
  console.log(file.name);
  blob = blobService.createBlockBlobFromBrowserFile(
    'mycontainer',
    file.name,
    file,
    (error, result) => {
    if(error) {
      console.log("oops error");
    }else {
      console.log('Upload is successful');
    }
    });
  urlprefix = "https://abhivivlil2.blob.core.windows.net/pics/mycontainer/";
  fileUrl = urlprefix + file.name + account.sas;
 // alert(JSON.stringify(blob));
  document.getElementById("urlDisplay").value = fileUrl;
}
