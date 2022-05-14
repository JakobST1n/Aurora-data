/* LUT for date-number from month name. */
const SHORT_MONTH = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/**
 * Gets a month number from the name
 * @param  {string} The month name to find the number of.
 * @return {number} The number of the monthname.
 */
function getMonthNumber(monthName) {
    if (typeof(monthName) !== "string") {
        throw new Error(`Cannot get month number of ${typeof(monthName)}...`);
    }
    if (monthName.length < 3) {
        throw new Error(`Cannot get month number string "${monthName}" of length ${monthName.length}...`);
    }

    monthName = monthName.substring(0,3).toLowerCase();
    let monthNumber = SHORT_MONTH.indexOf(monthName);

    if (monthNumber === -1) {
        throw new Error(`Could not find the month ${monthName}.`);
    }
    return monthNumber;
}

/**
 * Padds a string (or number) with leading zeroes.
 * @param  {string|number}            number The string to be padded.
 * @param  {number}        [2] n      The minimum width of the returned string.
 * @return {string}                   Zero-padded string.
 */
function zpad(number, n=2) {
    let ret = number.toString();
    while (n - ret.length > 0) {
        ret = "0" + ret;
    }
    return ret
}

/**
 * Attempts to recognize date-string pattern and convert into ISO861.
 * @param  {string} dateStr A String representing the time, UTC will be assumed
 *                          unless it is valid ISO861 with a different timezone.
 * @return {string}         dateStr as ISO861. If no pattern was found (or it
 *                          already is valid ISO861. The string will be returned
 *                          with no changes.
 */
function toISO861UTC(dateStr) {
    // yyyy-mm-ddThh:mm:ssZ
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(dateStr)) {
        //console.log(`yyyy-mm-ddThh:mm:ssZ <- ${dateStr}`);
        return dateStr;
    }

    // yyyy MMMM dd
    if (/^\d{4}\s[a-z,A-Z]+\s\d{2}$/.test(dateStr)) {
        //console.log(`yyyy MMM dd <- ${dateStr}`);
        let parts = dateStr.split(" ");
        dateStr = (`${parts[0]}-${zpad(getMonthNumber(parts[1]))}-${parts[2]}T00:00:00Z`);
        return dateStr;
    }

    // yyyy mm dd hh:mm:ss
    if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(dateStr)) {
        return dateStr.replace(" ", "T") + "Z";
    }

    // yyyy mm dd hh:mm:ss.msm
    if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}.\d{4}/.test(dateStr)) {
        return dateStr.replace(" ", "T").split(".")[0] + "Z";
    }

    console.warn(dateStr);
    return dateStr;
}

/**
 * Returns a date object from a date-string.
 * @param {string} dateStr A String representing the time, UTC will be assumed
 *                         unless it is valid ISO861 with a different timezone.
 * @return {Date}          The date object representing the date-string.
 */
export function parseDateAsUTC(dateStr) {
    dateStr = toISO861UTC(dateStr);
    return new Date(dateStr);
}
