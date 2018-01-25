import React from 'react';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';

import { P } from 'components';

const sidebarDep = `import { Sidebar } from 'components';
import appRoutes from 'routes/app.jsx';
import image from 'assets/img/sidebar-1.jpg';
import logo from 'assets/img/reactlogo.png';`;
const sidebarCode = `this.state = {
    mobileOpen: false,
};

handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
};`;
const sidebar = `<Sidebar
    routes={appRoutes}
    logoText={"Creative Tim"}
    logo={logo}
    image={image}
    handleDrawerToggle={this.handleDrawerToggle}
    open={this.state.mobileOpen}
    color="blue"
    {...rest}
/>`;
class Sidebar extends React.Component{
    render(){
        return (
            <div>
                <h1>Sidebar / Drawer</h1>
                <P>We've restyled the classic Material UI Drawer.</P>
                <P>It comes in 5 different colors (just pass the <code>color</code> prop to it with one of the <code>purple</code>, <code>blue</code>, <code>green</code>, <code>orange</code>, <code>red</code>), option to set a background image (<code>image</code>), a option to set the brand text (<code>logoText</code>), a option to set the logo image (<code>logo</code>) and a option to set the routes / links to be displayed in it (<code>routes</code>).</P>
                <P>For more info about the links, please read the <Link to={'/documentation/routing-system'}>routing system section</Link>.</P>
                <h2>Example of code</h2>
                <P>This is the actual code for the <code>Sidebar</code> in our demo app.</P>
                <SyntaxHighlighter language="jsx" style={prism}>{sidebarDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{sidebarCode}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{sidebar}</SyntaxHighlighter>
                <h2>Props</h2>
                <P>Please check out the <a href="https://material-ui-next.com/demos/drawers/" target="_blank" rel="noopener noreferrer">official material-ui documentation</a>.</P>
            </div>
        );
    }
}

export default Sidebar;
