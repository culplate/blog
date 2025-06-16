import s from './PostForm.module.scss';

export interface PostFormProps {}

export function PostForm(props: PostFormProps) {
  return <form className={s.form} action=""></form>;
}
