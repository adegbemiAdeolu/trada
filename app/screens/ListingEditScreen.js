import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import CategoryPickerItem from '../components/CategoryPickerItem'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'
import Screens from '../components/Screens'
import FormImagePicker from '../components/forms/FormImagePicker'
import useLocation from '../components/hooks/useLocation'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000000000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    image: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
    { label: "Cars", value: 2, backgroundColor: '#fd9644', icon: 'car' },
    { label: "Cameras", value: 3, backgroundColor: '#fed330', icon: 'camera' },
    { label: "Games", value: 4, backgroundColor: '#26de81', icon: 'cards' },
    { label: "Clothing", value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
    { label: "Sports", value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
    { label: "Movies & Music", value: 7, backgroundColor: '#4b7bec', icon: 'headphones' },
    { label: "Books", value: 8, backgroundColor: '#5e8eec', icon: 'book' },
    { label: "Others", value: 9, backgroundColor: '#4b7bec', icon: 'folder' },
]

export default function ListingEditScreen() {

    const location = useLocation();

    return (
        <Screens style={styles.container}>
            <AppForm 
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >

                <FormImagePicker name="images" />

                <AppFormField 
                    maxLength={255} 
                    name="title" 
                    placeholder="Title" />

                <AppFormField 
                    keyboardType="numeric"
                    maxLength={13}
                    name="price"
                    placeholder="Price"
                    width={120} />
                
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    placeholder="Category"
                    width='50%'
                    PickerItemComponent={CategoryPickerItem} />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    placeholder="Description"
                    numberOfLines={3} />

                <SubmitButton title="Post" />
            </AppForm>
        </Screens>
    )
}

const styles = StyleSheet.create({})
