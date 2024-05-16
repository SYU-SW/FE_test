import React from 'react';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css'; // CSS 파일 경로는 필요에 따라 수정

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx... ',
    date: 'August 18, 2022',
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx... ',
    date: 'August 27, 2022',
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx... ',
    date: 'September 9, 2022',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx... ',
    date: 'September 12, 2022',
  },
];

function ArticlesCardsGrid() {
  const cards = mockdata.map((article, index) => (
    <Card key={index} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={16 / 9}>
        <Image src={article.image} alt={article.title} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" fontWeight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default ArticlesCardsGrid;
