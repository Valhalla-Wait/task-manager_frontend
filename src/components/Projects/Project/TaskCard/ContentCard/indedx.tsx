import React from 'react';
import { useDispatch } from 'react-redux';
// import {
//   DescriptionTaskTitle,
//   StatusWorkSelect,
//   PrioritiesSelect,
//   AvatarSelect,
//   EditorSelect,
//   DateInfo,
//   CheckListInfo,
//   TagsGroup,
//   DocInfo,
// } from 'shared';
// import { OneTaskEffects, Types } from 'store';
import styles from './ContentCard.module.scss';

// type ContentCardPropsType = {
//   item: Types.TaskCardType;
// };

export const ContentCard = (props: any) => {
  // const {
  //   item: { title, storage_files_meta, progress, tags, status, task_id, priority, created, roles },
  // } = props;

  const dispatch = useDispatch();
  const openModal = () => {
    // dispatch(OneTaskEffects.fetchOneTask(task_id));
    alert('modal task')
  };

  // const checkRoles = roles.map((el) => ({
  //   id: el.assign_user.user_id,
  //   isAuthor: el.task_role.is_author,
  //   nameRole: el.task_role.name,
  // }));
  return (
    <div className={styles.wrapper}> 
    {/* needSecondRow={!!(progress || storage_files_meta.total)} PROPS */}
      <div className="col-1">
        <button type="button" onClick={openModal}>
          {/* <DescriptionTaskTitle taskTitle={title} /> */}
          descriptionTask
        </button>
      </div>
      <div className="col-2">
        {/* {storage_files_meta.total ? <DocInfo taskAttachCount={storage_files_meta.total} /> : null} */}
        DocInfoCount icon
      </div>
      <div className="col-3">
        {/* {progress ? (
          <CheckListInfo
            taskCheckListCompleted={progress?.completed}
            taskCheckListTotal={progress?.total}
          />
        ) : null} */}
        progress
      </div>
      <div className="col-4">
        {/* <StatusWorkSelect checkRoles={checkRoles} status={status} taskId={task_id} /> */}
        Status В работе
      </div>
      <div className="col-5">
        {/* <DateInfo date={created} /> */}
        Created Date
      </div>
      <div className="col-6">
        {/* <PrioritiesSelect
          checkRoles={checkRoles}
          statusId={status.task_status_id}
          priority={priority}
          taskId={task_id}
        /> */}
        PrioritiesSelect
      </div>
      <div className="col-7">
        {/* <TagsGroup
          checkRoles={checkRoles}
          taskTags={tags.map((tag) => tag.task_tag)}
          taskId={task_id}
          collapsable
        /> */}
        Tags
      </div>
      <div className="col-8">
        {/* <AvatarSelect users={roles} /> */}
        Avatars
      </div>
      <div className="col-9">
        {/* <EditorSelect taskId={task_id} statusId={status.task_status_id} checkRoles={checkRoles} /> */}
        Edit Task btn
      </div>
    </div>
  );
};