import { Navbar } from "react-bootstrap"

const MyFooter = () => {
    return(
        <Navbar style={{ backgroundColor : `black` }} sticky="bottom">
  <Navbar.Collapse className="justify-content-around">
  <Navbar.Text className="text-white">
      <b>Strive Book Collection</b>
    </Navbar.Text>
    <Navbar.Text className="text-white">
        <b>some footer</b>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    )
}
export default MyFooter