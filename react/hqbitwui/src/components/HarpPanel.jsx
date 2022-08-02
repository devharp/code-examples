import HarpAppContext from '../context/HarpAppContext';
import { Scrollbars } from 'react-custom-scrollbars';
import { useContext } from 'react';

import HarpIconButton from './HarpIconButton';
import HarpBigIconButton from './HarpBigIconButton';
import HarpColoredIconButton from './HarpColoredIconButton';
import HarpColoredBigIconButton from './HarpColoredBigIconButton';
import HarpPageStateButtons from './HarpPageStateButtons';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import AddLinkIcon from '@mui/icons-material/NoteAdd';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AllTorrentIcon from '@mui/icons-material/AllInclusive';

import BlockIcon from '@mui/icons-material/GridView';
import DownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import UploadIcon from '@mui/icons-material/FileUploadOutlined';
import CompletedIcon from '@mui/icons-material/FileDownloadDoneOutlined';
import ResumedIcon from '@mui/icons-material/PlayArrowOutlined';
import PausedIcon from '@mui/icons-material/PauseOutlined';
import CheckingIcon from '@mui/icons-material/SettingsOutlined';
import ErroredIcon from '@mui/icons-material/PriorityHighOutlined';

function HarpPanel() {
    const context = useContext(HarpAppContext);
    const sidepanel = context.theme.sidepanel;
    const toppanel = context.theme.toppanel;
    function TopPanel() {
        return (
            <>
                <div style={{ ...toppanel, height: '50px', width: '100%' }}>
                    <div style={{ display: 'flex' }}>
                        <HarpIconButton className='ms-2'>
                            <MenuOpenIcon/>
                        </HarpIconButton>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <HarpIconButton className='me-1'>
                            <AddLinkIcon/>
                        </HarpIconButton>
                        <HarpIconButton className='mx-1'>
                            <AddCircleIcon/>
                        </HarpIconButton>
                        <HarpIconButton className='mx-1'>
                            <DeleteIcon/>
                        </HarpIconButton>
                        <HarpIconButton className='mx-1'>
                            <PlayCircleIcon/>
                        </HarpIconButton>
                        <HarpIconButton className='mx-1'>
                            <PauseCircleIcon/>
                        </HarpIconButton>
                        <HarpIconButton className='ms-1 me-2'>
                            <SettingsIcon />
                        </HarpIconButton>
                    </div>
                </div>

            </>
        );
    }
    function SidePanel() {
        const buttonicons = [<AllTorrentIcon/>, <DownloadIcon/>, <UploadIcon/>, <CompletedIcon/>, <ResumedIcon/>, <PausedIcon/>, <CheckingIcon/>, <ErroredIcon/>];
        function setPage(i){
            console.log('side panel button clicked: ', i);
            context.setPage(i);
        }
        return (
            <>
                <div style={{ ...sidepanel, height: '100%', width: '80px' }}>
                    <div className='d-flex align-items-center justify-content-center' style={{ height: '60px', width: '75px' }}>
                        <HarpColoredBigIconButton><BlockIcon /></HarpColoredBigIconButton>
                    </div>
                    <Scrollbars autoHide={true}>
                        <div className='d-flex flex-column align-items-center py-3'>
                            <HarpPageStateButtons buttonicons={buttonicons} onClick={setPage} />
                        </div>
                    </Scrollbars>
                </div>
            </>
        );
    }
    return (
        <>
            <div style={{ position: 'fixed', display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
                <SidePanel />
                <TopPanel />
            </div>
        </>
    );
}

export default HarpPanel;