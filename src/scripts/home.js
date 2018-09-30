account = {
  name: 'abhivivlil2',
  sas: '?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-09-30T12:33:02Z&st=2018-09-30T04:33:02Z&spr=https&sig=X7NYip6U84yf2DgemIVnOBt3E%2FG8Xz9YphbX4X7kq6Q%3D'
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
  alert(JSON.stringify(blob));
}
