
const body = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(250, 250, 250)',
}

const sidepanel = {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRight: '1px solid rgb(240, 240, 240)',
    boxShadow: '2px 0px 3px rgb(235, 235, 235)'
}

const toppanel = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: '0px 2px 3px rgb(235, 235, 235)'

}

const iconbutton = {
    backgroundColor: 'rgb(242, 242, 242)',
    color: 'rgb(80, 80, 80)',
    // color: 'rgb(24, 144, 255)',
    borderRadius: '0.3em',
    width: '2em', height: '2em',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.1s',
    '&:active': {
        color: 'rgb(242, 242, 242)',
        backgroundColor: 'rgb(80, 80, 80)',
    },
    // '&:active': {
    // color: 'rgb(24, 144, 255)',
    // backgroundColor: 'rgb(24, 144, 255, 0.2)',
    // }
}

const bigiconbutton = {
    backgroundColor: 'rgb(242, 242, 242)',
    color: 'rgb(80, 80, 80)',
    // color: 'rgb(24, 144, 255)',
    borderRadius: '0.3em',
    width: '2.5em', height: '2.5em',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.1s',
    '&:active': {
        color: 'rgb(242, 242, 242)',
        backgroundColor: 'rgb(80, 80, 80)',
    },
    // '&:active': {
    // color: 'rgb(24, 144, 255)',
    // backgroundColor: 'rgb(24, 144, 255, 0.2)',
    // }
}

const colorediconbutton = {
    color: 'rgb(24, 144, 255)',
    backgroundColor: 'rgb(24, 144, 255, 0.2)',
    borderRadius: '0.3em',
    width: '2em', height: '2em',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
}

const coloredbigiconbutton = {
    color: 'rgb(24, 144, 255)',
    backgroundColor: 'rgb(24, 144, 255, 0.2)',
    borderRadius: '0.3em',
    width: '2.5em', height: '2.5em',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
}

const white = { body, sidepanel, toppanel, iconbutton, bigiconbutton, colorediconbutton, coloredbigiconbutton };


export default white;