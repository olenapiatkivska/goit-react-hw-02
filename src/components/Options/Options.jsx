import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({options, updateFeedback, totalFeedback, resetFeedback}) => {
    return (
        <div className={css.sectionOptions}>
            {options.map((option) => {
                return (
                    <button className={clsx(css.btnOption, css[option])} key={option} onClick={() => updateFeedback(option)}>{option}</button>
                )
            })}
            { totalFeedback > 0 && (<button className={css.btnOption}  type="button" onClick={resetFeedback}>Reset</button>)}
        </div>
    );
};
export default Options;