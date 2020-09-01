//$('#flashMessage').hide();
//
//const title = "My first Blog Post"
//const content = "This is my <strong>frist</strong> post!";
//
//
//
//$('#previewButton'.click(function(){
//    const title = $('#blogTitleInput').val();
//    const content = $('#blogContentInput').val();
//  
//  
//$('#blogTitlePreview').text(title);
//$('#blogContentPreview').html(content);
//
//  $('#flashMessage').slideDown(1000);.delay(3000);.slideUp();
//  });
  
  
$('#flashMessage').hide();

$('#previewButton').click(function(){

let title = $('#blogTitleInput').val(); let content = $('#blogContentInput').val();

$('#blogTitlePreview').text(title); $('#blogContentPreview').text(content);

$('#flashMessage').slideDown(1000).delay(3000).slideUp(); });