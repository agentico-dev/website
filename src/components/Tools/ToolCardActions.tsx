import { FavoriteBorder, ModeCommentOutlined, SendOutlined, BookmarkBorderRounded, MoreHoriz } from "@mui/icons-material";
import { Box, CardContent, CardOverflow, Divider, IconButton, Typography } from "@mui/joy";

const ToolCardActions: React.FC = () => {
  return (
    <>
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
      <IconButton variant="plain" color="neutral" size="sm">
        <BookmarkBorderRounded />
      </IconButton>
    </Box>
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
      <IconButton variant="plain" color="neutral" size="sm">
        <MoreHoriz />
      </IconButton>
      </Box>
  </CardContent>
  <CardOverflow variant="soft">
    <Divider inset="context" />
    <CardContent orientation="horizontal">
      <Typography level="body-xs">6.3k views</Typography>
      <Divider orientation="vertical" />
      <Typography level="body-xs">1 hour ago</Typography>
    </CardContent>
  </CardOverflow>
    </>
  );
}

export default ToolCardActions;