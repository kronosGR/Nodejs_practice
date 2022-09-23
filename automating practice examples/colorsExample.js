require('colors');

const MESSAGE_TYPES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

const {ERROR, WARNING, SUCCESS} = MESSAGE_TYPES;

function log(message, type){
  let colorMessage;
  switch (type){
    case ERROR:
      colorMessage=`[ERROR] ${message.red}`
      break
    case WARNING:
      colorMessage=`[ERROR] ${message.yellow}`
      break
    case SUCCESS:
      colorMessage=`[ERROR] ${message.green}`
      break
    default:
      colorMessage=`[ERROR] ${message}`
  }
  console.log(message)
}

log('This is a success message', SUCCESS);
log('This is a warning message', WARNING);
log('This is an error message', ERROR);
log('This is an info message\n');