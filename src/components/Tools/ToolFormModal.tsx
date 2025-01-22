import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  ModalDialogProps,
  Modal,
  ModalClose,
  DialogTitle,
  DialogContent,
  ModalDialog,
  Stack,
  Textarea,
  Typography,
  Snackbar
} from '@mui/joy';

interface Tool {
  title: string;
  name: string;
  description: string;
  author?: {
    name: string;
    url: string;
  };
  homepage?: string;
  repository: string;
  bugs?: string;
  license?: string;
  category?: string;
  skills?: string[];
}

interface ToolFormProps {
  onSubmit: (tool: Tool) => any;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ToolFormModal: React.FC<ToolFormProps> = ({
  onSubmit,
  open,
  setOpen
}) => {
  const [tool, setTool] = useState<Tool>({
    title: '',
    name: '',
    description: '',
    author: { name: '', url: '' },
    homepage: '',
    repository: '',
    bugs: '',
    license: '',
    category: '',
    skills: []
  });
  const [showThanksSnackbar, setShowThanksSnackbar] = useState(false);
  const [layoutModal, setLayoutModal] = useState<ModalDialogProps['layout'] | undefined>(
    undefined
  );
  const handleClose = () => {
    setOpen(false)
    setLayoutModal(undefined)
  };
  const DESCRIPTION_MAX_LENGTH = 250;

  function openThanksSnackbar() {
    setShowThanksSnackbar(true);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let specialField = null;
    // restrict description to max characters
    if (name === 'description' && value.length > DESCRIPTION_MAX_LENGTH) {
      specialField = value.substring(0, DESCRIPTION_MAX_LENGTH);
    }
    // if title and not name, set name to the title, replacing spaces and special characters with hyphens
    setTool((prevTool) => ({
      ...prevTool,
      [name]: specialField ? specialField : value,
    }));
  };

  const handleNameChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name == 'name' || (name === 'title' && !tool.name)) {
      setTool((prevTool) => ({
        ...prevTool,
        name: value.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
      }));
    }
  }

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTool((prevTool) => ({
      ...prevTool,
      author: {
        ...prevTool.author,
        [name]: value
      }
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTool((prevTool) => ({
      ...prevTool,
      skills: value.split(',')
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(tool).then((): void => {
      handleClose();
      openThanksSnackbar();
    }).catch((error: Error): void => {
      console.error('Error updating tools.json:', error);
      alert('Failed to add tool.');
    });
  };

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={open}
        onClose={() => handleClose()}
      >
        <ModalDialog
          layout={open ? 'center' : layoutModal}
          sx={{ minWidth: 500, maxWidth: 800, overflow: 'auto' }}
        >
          <DialogTitle>Add a new MCP Tool</DialogTitle>
          <DialogContent>Fill in the information of the tool.</DialogContent>
          <ModalClose tabIndex={-1} />
          <form
            onSubmit={handleSubmit}
          >
            <Stack spacing={1.5} sx={{ minWidth: 300 }}>
              <FormControl color='primary'>
                <Input
                  placeholder='Title'
                  name="title"
                  value={tool.title}
                  onChange={handleChange}
                  onBlur={handleNameChange}
                  required
                />
                <FormHelperText>
                  The title of the tool (human readable)
                </FormHelperText>

              </FormControl>
              <FormControl>
                <Input
                  placeholder='Name'
                  name="name"
                  value={tool.name}
                  onChange={handleChange}
                  onBlur={handleNameChange}
                />
                <FormHelperText>
                  The name of the tool (only letters, numbers, and hyphens)
                </FormHelperText>
              </FormControl>
              <FormControl color='primary'>
                <Textarea
                  placeholder='Description'
                  name="description" value={tool.description}
                  onChange={handleChange}
                  required
                  minRows={3}
                  maxRows={5}
                  endDecorator={
                    <Typography level="body-xs" sx={{ ml: 'auto' }}>
                      {tool.description.length} / {DESCRIPTION_MAX_LENGTH - tool.description.length} chars
                    </Typography>
                  }
                />
                <FormHelperText>A brief description of the tool</FormHelperText>
              </FormControl>
              <FormControl color='primary'>
                <Input
                  placeholder='Repository'
                  name="repository" value={tool.repository} onChange={handleChange} required />
                <FormHelperText>The URL to the tool's code repository</FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder='Author Name'
                  name="name" value={tool.author.name} onChange={handleAuthorChange} />
                <FormHelperText>The name of the author</FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder='Author URL'
                  name="url" value={tool.author.url} onChange={handleAuthorChange} />
                <FormHelperText>The URL to the author's website</FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder='Homepage'
                  name="homepage" value={tool.homepage} onChange={handleChange} />
                <FormHelperText>The URL to the tool's homepage</FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder='Bugs URL'
                  name="bugs" value={tool.bugs} onChange={handleChange} />
                <FormHelperText>The URL to the tool's bug tracker</FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder='License'
                  name="license" value={tool.license} onChange={handleChange}/>
                <FormHelperText>The license of the tool</FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder='Category'
                  name="category" value={tool.category} onChange={handleChange} />
                <FormHelperText>The category of the tool</FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder='Skills (comma separated)'
                  name="skills" value={tool.skills.join(',')} onChange={handleSkillsChange} />
                <FormHelperText>What are the skills this tool provides (i.e. DevOps, SQL)?</FormHelperText>
              </FormControl>
              {/* align to the right, space between */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button color='neutral' onClick={() => handleClose()}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </Box>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      <Snackbar
        autoHideDuration={10000}
        open={showThanksSnackbar}
        variant="soft"
        color='success'
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setShowThanksSnackbar(false);
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key='thanks-snackbar'
      >
        <Stack spacing={2} sx={{ width: 400, p: 1, borderRadius: 1 }}>
          <Typography level='body-md' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Thanks for submitting the tool!
          </Typography>
          <br />
          <Typography level='body-xs' sx={{ textAlign: 'center' }}>
            We'll review it and add it to the catalog soon.
          </Typography>
          <br />
          <Typography level='body-md'
            sx={{ alignItems: 'flex-start', wordBreak: 'break-all' }}>
            If you enjoyed Agentico, please consider starring your favorite <a href='https://github.com/orgs/agentico-dev/repositories'>repository on GitHub</a>.
          </Typography>
        </Stack>

      </Snackbar>
    </>
  );
};

{/* https://github.com/agentico-dev/website/blob/main/src/components/ToolsCatalog/tools.json  */ }
export default ToolFormModal;

