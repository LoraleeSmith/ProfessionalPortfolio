M.toast({
    function newFunction() {
    return 'Thank you for your interest in me! Here is a small bit about me!';
}
var toastElement = document.querySelector('.toast');
var toastInstance = M.Toast.getInstance(toastElement);
toastInstance.dismiss();