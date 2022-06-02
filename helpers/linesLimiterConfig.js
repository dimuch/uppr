export const linesLimiterConfig = (linesQty) => {
    return {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: linesQty,
        minHeight: 2 * linesQty + 'rem',
        paddingBottom: '0 !important',
        overflowY: 'hidden',
    }
};

