import React from 'react';
import { Button, Text, View } from 'react-native'

function MovieDetail(): JSX.Element {

    const fetchData = async (): Promise<void> => {

        const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTZhZjQ0M2Y2MDIxN2Y3YTBjNTFhODRlZmIwODJjNiIsIm5iZiI6MTcxOTAyNzI5My45ODIwNzIsInN1YiI6IjY2NzY0NTI1MWI3YTgyMmY4NzlmZTFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.30AQB6I-Q3XQPvCcsbA-PB64m-o5yblaqrqryYbdm5w';

        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        }

        try {
            const request = await fetch(url, options)
            const response = await request.json()
            console.log(JSON.stringify(response, null, '\t'));
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Movie Detail</Text>
            <Button title='Fetch Data' onPress={() => fetchData()} />
        </View>
    )
}

export default MovieDetail