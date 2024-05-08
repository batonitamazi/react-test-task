import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddNoteDialog({ open, handleClose, handleAddTodo, editNote, handleEditTodo }) {
    const [note, setNote] = useState('');
    useEffect(() => {
        if (editNote) {
            setNote(editNote.text);
        } else {
            setNote('');
        }
    }, [editNote]);

    const handleSave = () => {
        if (note.trim() !== '') {
            if (editNote) {
                handleEditTodo(note, editNote.id);
            } else {
                handleAddTodo(note);
            }
            handleClose();
            setNote('');
        }
    };

    const handleCancel = () => {

        handleClose();
        setNote('');
    };

    return (
        <Dialog open={open} onClose={handleCancel}  >
            <DialogTitle>New Note</DialogTitle>

            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Enter your note"
                    style={{ width: '500px' }}
                    fullWidth
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary">Cancel</Button>
                <Button onClick={handleSave} variant="contained" style={{ background: "#6C63FF" }}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddNoteDialog;
