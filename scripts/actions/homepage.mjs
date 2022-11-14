export const initHomePage = async (page) => {

     await homeActions(page);
}

 const homeActions = async (page) =>{

 }

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }