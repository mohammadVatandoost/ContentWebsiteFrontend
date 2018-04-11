export const authAdmin = (state = '',action) => {
    switch (action.type) {
        case 'trueAuth' :
            return true;
        case 'falseAuth':
            return false;
        case 'authStatus':

    }
}