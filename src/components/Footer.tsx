import "../css/Footer.css"

function App() {
    return (
        <section id="footer">
            <div>
                <h3 style={{marginBottom:'3rem'}}>Navigation</h3>
                <h3>Home</h3>
                <h3>Contact</h3>
            </div>
            <div>
                <h1>Resources</h1>
                <h1>Docs</h1>
            </div>
            <div>
                <h1>Social</h1>
                <ul>
                    <li><img src="/twitter.svg" alt="" /></li>
                    <li><img src="/github.svg" alt="" /></li>
                </ul>
            </div>
        </section> 
    )
}

export default App;