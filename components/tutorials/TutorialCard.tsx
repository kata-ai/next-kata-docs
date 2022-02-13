import { IconArrowRight } from '@aksara-ui/icons';
import { Box, Heading, theme, Text } from '@aksara-ui/react';
import { MarkdownContent } from 'interfaces/next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';
import { Anchor, Card } from './components';
import { ProductBadge } from '../badge';
import Image from 'next/image';

interface TutorialCardProps {
  tutorial: any;
  index?: number;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial, index }) => {
  const { title, imgSpot, id } = tutorial;
  return (
    <Card key={title} index={index}>
      <Image src={imgSpot} alt={title} />
      <CardContent>
        <ProductBadge>
          <Image src="/assets/images/products/icon/kata-platform-icon.svg" alt="Kata Platform" />
          <Text fontSize={12} fontWeight={600} color={theme.colors.greydark02}>
            Kata Platform
          </Text>
        </ProductBadge>
        <CardTitle>
          <Heading scale={700} fontSize={20} overflow="hidden">
            {title}
          </Heading>
        </CardTitle>
        <Link href={`/tutorials/${id}`}>
          <Anchor>
            View Article <IconArrowRight width={14} />
          </Anchor>
        </Link>
      </CardContent>
    </Card>
  );
};

const CardContent = styled(Box)`
  height: 285px;
  padding: 32px;
  @media only screen and (max-width: ${`${breakpoints.xl}px`}) {
    padding: 24px;
  }
`;

const CardTitle = styled(Box)`
  overflow: hidden;
  max-height: 125px;
  height: 125px;
  @media only screen and (max-width: ${`${breakpoints.lg}px`}) {
    max-height: 125px;
  }
`;
