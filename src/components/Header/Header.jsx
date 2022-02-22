import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Register from '../Register/Register';

function Header() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div id='header'>
            <div className='logo'>
                <Link to="/">testdev.vn</Link>
            </div>
            <div className='account'>
                <Button className='login' onClick={handleClickOpen}>login</Button>
                <Button className='register' onClick={handleClickOpen}>register</Button>
            </div>
            <Dialog
                disableEscapeKeyDown 
                disableScrollLock 
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title"
            >
            <DialogContent>
                <Register/>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default Header;