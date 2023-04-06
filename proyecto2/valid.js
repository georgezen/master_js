export const valid = ({name,last_name}) => {

    if (name === '' || last_name === '') {
        console.trace(name + ' or ' +last_name);
        alert(name + ' or ' +last_name);
    }

}