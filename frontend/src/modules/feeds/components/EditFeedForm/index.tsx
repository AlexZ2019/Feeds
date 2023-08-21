import styles from "../../../auth/components/UserForm/index.module.css";
import { Control, Controller, } from "react-hook-form";
import { DatePicker, Input } from "antd";
import * as React from "react";
import { FC } from "react";
import moment from "moment/moment";

type Props =  {
  control: Control;
  errors: any;
}

const EditFeedForm: FC<Props> = ({errors, control}) => {

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => <Input placeholder="title" {...field} />}
        />
        <p className={styles.errorMessage}>{errors.title ? errors.title.message : ''}</p>
      </div>
      <div className={styles.input}>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <Input placeholder="description" {...field} />}
        />
        <p className={styles.errorMessage}>{errors.title && errors.title.message}</p>
      </div>
      <div className={styles.input}>
        <Controller
          name="author"
          control={control}
          render={({ field }) => <Input placeholder="author" {...field} />}
        />
        <p className={styles.errorMessage}>{errors.author && errors.author.message}</p>
      </div>
      <div className={styles.input}>
        <Controller
          name="link"
          control={control}
          render={({ field }) => <Input placeholder="link" {...field} />}
        />
        <p className={styles.errorMessage}>{errors.link && errors.link.message}</p>
      </div>
      <div className={styles.input}>
        <Controller
          name="imageUrl"
          control={control}
          render={({ field }) => <Input placeholder="Image Link" {...field} />}
        />
        <p className={styles.errorMessage}>{errors.imageUrl && errors.imageUrl.message}</p>
      </div>
      <div className={styles.input}>
        <Controller
          name="date"
          control={control}
          render={({ field }) => {
            return <DatePicker {...field}
                               disabledDate={d => !d || d.isAfter(moment())
                                 || d.isSameOrBefore("1960-01-01") }
            />
          }}
        />
      </div>
    </form>
  );
};

export default EditFeedForm;
