import { Card, Text, Stack, Heading, Button, CardBody, CardFooter, Tag } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Flower {
    name: string;
    genus: string;
    season: string;
}

const FlowerCard = () => {
    const [data, setData] = useState<Flower[] | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/flowers");
                const parsedData = await response.json();
                setData(parsedData);
            } catch(error) {
                console.error("Error fetching from API: ", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div>
            {data && data.map((flower, index) => (
                <Card key={index} maxW='sm'>
                    <CardBody>
                        {/** add image */}
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{flower.name}</Heading>
                            <Text>{flower.genus}</Text>
                            <Tag variant='solid' colorScheme='pink'>{flower.season}</Tag>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Learn more
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default FlowerCard