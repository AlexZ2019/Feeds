import { Button, Input, Row } from 'antd';
import { Control, Controller, FieldError, FieldValues, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import styles from './index.module.css';
import { FC } from 'react';
import * as React from "react";

type FormProps = {
  title: string;
  submitButtonText: string;
  extraFields?: { name: string, component: any }[];
}

type UserFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  control: Control;
  errors: { email?: FieldError | undefined; password?: FieldError | undefined };
  loading: boolean;
  formProps: FormProps;
};

const UserForm: FC<UserFormProps> = ({ onSubmit, handleSubmit, control, errors, loading, formProps }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h3>{ formProps.title }</h3>
      <div className={styles.input}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input placeholder="email" {...field} />}
        />
        <div className={styles.errorMessage}>{errors.email ? errors.email.message : ''}</div>
      </div>
      <div className={styles.input}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input placeholder="password" type="password" {...field} />}
        />
        <div className={styles.errorMessage}>{errors.password ? errors.password.message : ''}</div>
      </div>
      { formProps.extraFields &&
        formProps.extraFields.map((extraField, index) => {
        return (
          <div className={styles.input}>
            <Controller key={index} name={extraField.name} control={control} render={extraField.component}/>
        </div>
        );
      })}
      <Row justify='space-between'>
        <Button type="primary" htmlType="submit" loading={loading} disabled={loading} className={styles.formButton}>
          { formProps.submitButtonText }
        </Button>
      </Row>
    </form>
  );
};

export default UserForm;
