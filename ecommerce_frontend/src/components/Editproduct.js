import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { editshirt, newshirt } from '../Redux/Action';

function Editproduct({product}) {
    const [show, setShow] = useState(false);
    const [title, settitle] = useState(product.title)
    const [description, setdescription] = useState(product.description)
    const [Image, setImage] = useState(product.Image)
    const [price, setprice] = useState(product.price)
    const [category, setcategory] = useState(product.category)
    const dispatch = useDispatch()
const user=useSelector(state=>state.user)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const handelsubmit=()=>{
    const data={title,description,Image,price,category}
    dispatch(editshirt(product._id,data))
    handleClose()

}
    return (
        <>
            <button style={{border:"none",borderRadius:"8px",background:"aqua",marginBottom:"10px",marginLeft:"10px"}} onClick={handleShow}>
Edit shirt
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="The title of the product"
                                autoFocus
                                onChange={(event) => settitle(event.target.value)}
                                defaultValue={product.title}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Describe your product"
                                autoFocus
                                onChange={(event) => setdescription(event.target.value)}
                                defaultValue={product.description}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Link of the picture"
                                autoFocus
                                onChange={(event) => setImage(event.target.value)}
                                defaultValue={product.Image}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="45 TND"
                                autoFocus
                                onChange={(event) => setprice(event.target.value)}
                                defaultValue={product.price}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Category</Form.Label>

                            <Form.Select onChange={(event) => setcategory(event.target.value)}>
                                <option value={""}>
                                    Select the category of t-shirt
                                </option>
                                <option value={"Men"}>
                                    Men
                                </option>
                                <option value={"Women"}>
                                    Women
                                </option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelsubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Editproduct;