/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
// From metadata we can get permalink and title
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function ToolCard({
    children
}: React.PropsWithChildren<{}>
) {

    const { metadata, frontMatter } = useBlogPost();
    const { permalink, title } = metadata;
    const { image } = frontMatter;
    console.log('ToolCard', permalink, title, image);
    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 300,
                '--Card-radius': (theme) => theme.vars.radius.xs,
            }}
        >
            <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
                <BlogPostItemHeaderAuthors />
                <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                    <MoreHoriz />
                </IconButton>
            </CardContent>
            <CardOverflow>
                <a href={permalink}>
                    <AspectRatio ratio={600 / 520} variant="outlined" maxHeight={300}>
                        <img src={image} alt="" loading="lazy" />
                    </AspectRatio>
                </a>
            </CardOverflow>
            <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
                <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <FavoriteBorder />
                    </IconButton>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <ModeCommentOutlined />
                    </IconButton>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <SendOutlined />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                    {' '}
                    {/* {[...Array(5)].map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: '50%',
                                width: `max(${6 - index}px, 3px)`,
                                height: `max(${6 - index}px, 3px)`,
                                bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
                            }}
                        />
                    ))} */}
                </Box>
                <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
                    <IconButton variant="plain" color="neutral" size="sm">
                        <BookmarkBorderRoundedIcon />
                    </IconButton>
                </Box>
            </CardContent>
            <CardContent>
                <Link
                    underline="none"
                    fontSize="lg"
                    fontWeight="lg"
                    textColor="text.primary"
                    href={permalink}
                >
                    {title}
                </Link>
                <Typography fontSize="sm">
                    {/* <Link
                        component="button"
                        color="neutral"
                        fontWeight="lg"
                        textColor="text.primary"
                    >
                        MUI
                    </Link>{' '} */}
                    <BlogPostItemContent>{children}</BlogPostItemContent>
                </Typography>
                <BlogPostItemFooter />
                <BlogPostItemHeaderInfo />
            </CardContent>
            {/* @todo Add comments functionality */}
            {/* <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                    <Face />
                </IconButton>
                <Input
                    variant="plain"
                    size="sm"
                    placeholder="Add a comment…"
                    sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px' }}
                />
                <Link disabled underline="none" role="button">
                    Post
                </Link>
            </CardContent> */}
        </Card>
    );
}
