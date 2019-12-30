const mail1 = 'user@gmail.com';
const mail2 = 'admin@gmail.com';
const pass1 = 'UserAdmin';
const pass2 = 'AdminPass';

let mail = prompt('Enter your mail');
if (mail === '' || mail === null) {
    alert('Canceled');
} else if (mail.length < 5) {
    alert('I don`t know any emails having name length less than 5 symbols');
} else if (mail === mail1) {
    let pass = prompt('Enter your password');
    if (pass === '' || pass === null) {
        alert('Canceled');
    } else if (pass === pass1) {
        let changePass = confirm('Do you want to change your password?');
        if (changePass === false) {
            alert('You have failed the change.');
        } else if (changePass === true) {
            let oldpass = prompt('Enter your old password');
            if (oldpass === '' || oldpass === null) {
                alert('Canceled');
            } else if (oldpass === pass1) {
                let newpass = prompt('Enter your new password');
                if (newpass === '' || newpass === null) {
                    alert('Canceled');
                } else if (newpass.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let againpass = prompt('Enter your password again');
                    if (againpass !== newpass) {
                        alert('You wrote the wrong password.');
                    } else if (againpass === newpass) {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('Wrong password');
        }
    }
} else if (mail === mail2) {
    let pass = prompt('Enter your password');
    if (pass === '' || pass === null) {
        alert('Canceled');
    } else if (pass === pass2) {
        let changePass = confirm('Do you want to change your password?');
        if (changePass === false) {
            alert('You have failed the change.');
        } else if (changePass === true) {
            let oldpass = prompt('Enter your old password');
            if (oldpass === '' || oldpass === null) {
                alert('Canceled');
            } else if (oldpass === pass2) {
                let newpass = prompt('Enter your new password');
                if (newpass === '' || newpass === null) {
                    alert('Canceled');
                } else if (newpass.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let againpass = prompt('Enter your password again');
                    if (againpass !== newpass) {
                        alert('You wrote the wrong password.');
                    } else if (againpass === newpass) {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you')
    }
}