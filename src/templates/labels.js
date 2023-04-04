// // Función de efecto input
// function labels () {
//   const inputs = document.querySelectorAll('input');

//   inputs.forEach((input) => {
//     input.onfocus = () => {
//       input.previousElementSibling.classList.add('top');
//       input.previousElementSibling.classList.add('focus');
//       input.parentNode.classList.add('focus');
//     };
//     input.onblur = () => {
//       input.value = input.value.trim();
//       // eslint-disable-next-line eqeqeq
//       if (input.value.trim().length == 0) {
//         input.previousElementSibling.classList.remove('top');
//       }

//       input.previousElementSibling.classList.remove('focus');
//       input.parentNode.classList.remove('focus');
//     };
//   });
// };

// export default labels;
