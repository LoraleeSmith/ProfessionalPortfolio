M.toast({
    function newFunction() {
    return 'Hi! My name is Loralee. I am a fullstack web developer with a background in Cosmetology, Business Management and Social Behavior.I attended the UCDavis Extension Web Developer 6 month bootcamp.';
}
var toastElement = document.querySelector('.toast');
var toastInstance = M.Toast.getInstance(toastElement);
toastInstance.dismiss();