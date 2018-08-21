import { schema } from 'normalizr';

const author = new schema.Entity('author', {}, {
  idAttribute: 'mid'
});
const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
})
const teacher = new schema.Entity('teacher',{},{
  idAttribute:'id'
})

const comments = new schema.Entity('comments',{},{
  idAttribute:'id'
})

const homeworkList = new schema.Entity('homeworkList',{
  author: author,
  classInfo: classes,
  teacherInfo: teacher,
  comments:[comments]
},{
  idAttribute: 'id'
})


export const HOMEWORKLIST = [homeworkList];
