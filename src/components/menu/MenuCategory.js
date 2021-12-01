import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "@mui/material";
//import { useState, useEffect} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "./MenuItem";
//import {Storage} from 'aws-amplify';

const MenuCategory = ({ category, items }) => {

   /* useEffect(() => {

        const getPhoto = async () => {

            try {
                const fileAccessURL = await Storage.get('s3://barfly94785142da6b4040965c0807e122901a35333-staging/beer/budweiser-logo.png')
                console.log(fileAccessURL)
             } catch( error) {
                 console.log(error)
             }
             //Storage.list(category + '/')
             ///    .then(result => console.log(result))
             //    .catch(err => console.log(err))

        }

        getPhoto()

        

    }, []) */

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {category}
            </AccordionSummary>
            <AccordionDetails>
                {items.items.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCategory;