import request from './request';


// load
const load = token => request(`load.php?token=${token}`);

// add
const add = (token, id, text) => request(`add.php?token=${token}&id=${id}&text=${text}`);

// change
const change = (token, id, text) => request(`change.php?token=${token}&id=${id}&text=${text}`);

// remove one
const remove = (token, id) => request(`remove.php?token=${token}&id=${id}`); 

// remove all
const clean = token => request(`clean.php?token=${token}`); 

// make important
const important = (token, id, res) => request(`important.php?token=${token}&id=${id}&imp=${res}`);

// make completed
const completed = (token, id, res) => request(`completed.php?token=${token}&id=${id}&comp=${res}`);


export {load, add, change, remove, clean, important, completed};