/*
 * checks password against required format:
 *      8-20 characters long
 *      only alphanumerics are accepted
 *      at least 1 digit, 1 lowercase and 1 uppercase character
 */
export default function checkPassword( pwd ) { 
    var format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return pwd.match(format);
}