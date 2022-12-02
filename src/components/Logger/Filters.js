import { Field, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ReactSelect } from "../Shared/ReactSelect";
import { Button } from "../Shared/Button";
import { Input } from "../Shared/TextInput";

export const Filters = ({ dropDowns, querySearchParams }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      employeeName: querySearchParams?.employeeName || "",
      actionType: querySearchParams?.actionType || "",
      applicationType: querySearchParams?.applicationType || "",
      fromDate: querySearchParams?.fromDate || "",
      toDate: querySearchParams?.toDate || "",
      applicationId: querySearchParams?.applicationId || "",
    },
    onSubmit: (values) => {
      // Check if saerch filters empty
      const isEmpty = Object.values(values).every(
        (x) => x === null || x === ""
      );
      if (isEmpty) {
        navigate(`/administration/logger`);
      } else {
        const qureyParams = new URLSearchParams(values).toString();
        navigate(`/administration/logger?${qureyParams}`);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <div className="card">
          <div className="flex w-full xl:justify-between items-end gap-4 xl:flex-nowrap flex-wrap">
            <div className="flex gap-4 items-end lg:flex-nowrap flex-wrap">
              <div className="sm:max-w-sm w-full">
                <Field
                  name="employeeName"
                  component={Input}
                  placeholder="e.g Admin.User"
                  label="Employee Name"
                  autoComplete="off"
                  customFeedbackLabel=" "
                  Required={false}
                />
              </div>
              <div className="sm:max-w-sm w-full">
                <Field
                  component={() => (
                    <ReactSelect
                      name="actionType"
                      label="Action Type"
                      placeholder="--select--"
                      required={false}
                      isMulti={false}
                      isClearable={true}
                      onChange={(selected) => {
                        formik.setFieldValue(
                          "actionType",
                          selected ? selected.value : "",
                          true
                        );
                      }}
                      value={formik.values.actionType}
                      options={(dropDowns?.actionTypes || []).map((item) => {
                        return {
                          label: item,
                          value: item,
                        };
                      })}
                    />
                  )}
                />
              </div>
              <div className="w-full">
                <Field
                  component={() => (
                    <ReactSelect
                      name="applicationType"
                      label="Application Type"
                      placeholder="--select--"
                      required={false}
                      isMulti={false}
                      isClearable={true}
                      onChange={(selected) => {
                        formik.setFieldValue(
                          "applicationType",
                          selected ? selected.value : "",
                          true
                        );
                      }}
                      value={formik.values.applicationType}
                      options={(dropDowns?.applicationTypes || []).map(
                        (item) => {
                          return {
                            label: item,
                            value: item,
                          };
                        }
                      )}
                    />
                  )}
                />
              </div>
              <div className="w-full">
                <Field
                  name="fromDate"
                  component={Input}
                  placeholder="Select Date"
                  label="From Date"
                  autoComplete="off"
                  type="date"
                  customFeedbackLabel=" "
                  Required={false}
                />
              </div>
              <div className="sm:max-w-sm w-full">
                <Field
                  name="toDate"
                  component={Input}
                  placeholder="Select Date"
                  label="To Date"
                  autoComplete="off"
                  type="date"
                  customFeedbackLabel=" "
                  Required={false}
                />
              </div>
              <div className="sm:max-w-sm w-full">
                <Field
                  name="applicationId"
                  component={Input}
                  placeholder="e.g. 2190822018"
                  label="Application Id"
                  autoComplete="off"
                  customFeedbackLabel=" "
                  Required={false}
                />
              </div>
              <div className="mb-8">
                <Button type="submit" variant="primary" title={"Search"} />
              </div>
              <div className="mb-8">
                <Button
                  type="button"
                  variant="secondary"
                  title={"Reset"}
                  onClickHandler={(e) => {
                    formik.resetForm();
                    navigate(`/administration/logger`);
                    e.preventDefault();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </FormikProvider>
    </form>
  );
};
