import React, { useState } from 'react';//using useState hook for setProjectBeingEdited
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
	projects: Project[];
	
}

function ProjectList({ projects }: ProjectListProps) {
	const [projectBeingEdited, setProjectBeingEdited] = useState({});//hide and show the edit form 
	const handleEdit = (project: Project) => {
		setProjectBeingEdited(project);
	};
	//add cancel event
	const cancelEditing = () => {
		setProjectBeingEdited({});
	};
	return (
		<div className="row">
			{projects.map((project) => (
				<div key={project.id} className="cols-sm">
					{project === projectBeingEdited ? (
						<ProjectForm project={project} onCancel={cancelEditing}/>      //boolean express projectBeingEdited? show project Form
					) : (
						<ProjectCard project={project} onEdit={handleEdit} />// 
					)}
				</div>
			))}
		</div>
	);
}

export default ProjectList;