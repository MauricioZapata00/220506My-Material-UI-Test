import React, { useState } from "react";
import { AppBar, Badge, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {

    const [presionMenu, setPresionMenu] = useState(null)
    const [presionIcon, setPresionIcon] = useState(false)

    const handleClickMenu = (e) => {
        setPresionMenu(e.currentTarget);
    }

    const handleCloseMenu = () => {
        setPresionMenu(null);
    }

    const handleIconClick = () => {
        setPresionIcon(true)
    }

    const handleCloseIcon = () => {
        setPresionIcon(false)
    }

    const abrirMenu = Boolean(presionMenu)

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MoveToInboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return ( 
        <div>
            <AppBar color="primary" elevation={20}>
				<Toolbar sx={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '1%',
				}}>
                    <Box>
                        <IconButton>
                            <Badge badgeContent={3}>
                                <TagFacesIcon />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={() => handleIconClick()}>
                            <MenuRoundedIcon />
                        </IconButton>
                        <Drawer anchor="left" open={presionIcon} onClose={() => handleCloseIcon()}>
                            {list("left")}
                        </Drawer>
                    </Box>
                    <Typography variant="h4" sx={{
                        //fontFamily: 'Helvetica',
                        cursor: 'pointer',
                        
                    }} aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={presionMenu ? "true" : "false"}
                    onClick={(e) => handleClickMenu(e)}
                    >
                        Menu
                    </Typography>
                    <Menu anchorEl={presionMenu} open={abrirMenu} onClose={() => handleCloseMenu()}>
                        <MenuItem onClick={() =>{}}>FAQ's </MenuItem>
                        <MenuItem onClick={() =>{}}>About Us </MenuItem>
                        <MenuItem onClick={() =>{}}>Contact Us</MenuItem>
                    </Menu>
					<Box>
						<Typography>
							<Button sx={{
								color: '#FFFFFF',
								backgroundColor: '#D14021',
								borderColor: '#9B2912',
								borderRadius: 5,
							}} variant="contained" color="secondary">Botón</Button>
						</Typography>
					</Box>
					
				</Toolbar>
			</AppBar>
        </div>
     );
}
 
export default Navbar;