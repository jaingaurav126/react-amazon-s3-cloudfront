import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Checkbox, IconButton, Typography, Container, AppBar, Toolbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const shareUrl = 'https://dtbcg7r1ycgut.cloudfront.net/'; // Replace with your app's URL

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Viral Task Manager
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography variant="h4" style={{ marginTop: '20px', textAlign: 'center' }}>Manage Your Tasks</Typography>

      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{ marginTop: '20px' }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Add Task
      </Button>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            {task.text}
            <IconButton onClick={() => handleDeleteTask(index)} color="secondary">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" style={{ marginTop: '20px', textAlign: 'center' }}>Share Your Tasks</Typography>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <FacebookShareButton url={shareUrl}>
          <Button variant="contained" style={{ backgroundColor: '#3b5998', color: '#fff', marginRight: '10px' }}>
            Facebook
          </Button>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <Button variant="contained" style={{ backgroundColor: '#00acee', color: '#fff', marginRight: '10px' }}>
            Twitter
          </Button>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          <Button variant="contained" style={{ backgroundColor: '#25D366', color: '#fff' }}>
            WhatsApp
          </Button>
        </WhatsappShareButton>
      </div>
    </Container>
  );
};

export default TaskManager;
