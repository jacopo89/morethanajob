
import React, {PureComponent, useState} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {Button, Modal, Uploader} from "rsuite";
import dataUrlToBlob from 'dataurl-to-blob';

const defaultCrop = {
    unit: '%',
    width: 30,
    aspect: 16 / 9,
};


export default function ImageCropper({keyField, onChange, locked=false, propCrop = defaultCrop, button=null}){

    const [src, setSrc] = useState(null);
    const [crop, setCrop] = useState( propCrop );
    const [show, setShow] = useState(false);
    const [imageRef, setImageRef] = useState(null);
    const [croppedImageUrl, setCroppedImageUrl] = useState(null);

    const onModalClose = ()=>{
        const blob = dataUrlToBlob(croppedImageUrl)
        onChange(blob);
        setShow(false);
        setSrc(null);
        setImageRef(null);
        setCroppedImageUrl(null);
    }

    const onSelectFile = files => {
        console.log("evento", files);
        if (files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                setSrc(reader.result)
            );
            reader.readAsDataURL(files[0].blobFile);
        }
        setShow(true);
    };

    // If you setState the crop in here you should return false.
    const onImageLoaded = image => {
        setImageRef(image);
        //this.imageRef = image;
    };

    const onCropComplete = crop => {
        makeClientCrop(crop);
    };

    const onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        setCrop(crop);
        //this.setState({ crop });
    };

    async function makeClientCrop(crop) {
        if (imageRef && crop.width && crop.height) {
            const croppedImageUrl = await getCroppedImg(
                imageRef,
                crop,
                'newFile.jpeg'
            );

            setCroppedImageUrl(croppedImageUrl);
            //this.props.onChange(this.props.keyField, croppedImageUrl);

        }
    }

    const getCroppedImg = (image, crop, fileName) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            resolve(canvas.toDataURL()); // base64
        });
    }

    return (
        <div className="App">
            <div>
                <Uploader fileListVisible={false} name="courseImage" onChange={onSelectFile}>{button}</Uploader>
            </div>
            <CropperModal src={src} crop={crop} croppedImageUrl={croppedImageUrl} locked={locked}
                          show={show} onModalClose={onModalClose}
                          onImageLoaded={onImageLoaded} onCropComplete={onCropComplete}
                          onCropChange={onCropChange}
            />

        </div>
    );
}

function CropperModal(props){
    const src = props.src;
    const crop = props.crop;
    const croppedImageUrl = props.croppedImageUrl;
    return (
        <>

            <Modal show={props.show} onHide={props.onModalClose} centered>
                <Modal.Header>
                    <Modal.Title>Cambia la immagine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Original Image </h5>
                    {src && (
                        <ReactCrop
                            src={src}
                            crop={crop}
                            locked={props.locked}
                            ruleOfThirds
                            onImageLoaded={props.onImageLoaded}
                            onComplete={props.onCropComplete}
                            onChange={props.onCropChange}
                        />
                    )}
                    <h5>Resized Image </h5>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        {croppedImageUrl && (
                            <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onModalClose}>Conferma</Button>
                </Modal.Footer>
            </Modal>
        </>);
}

