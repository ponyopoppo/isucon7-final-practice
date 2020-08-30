//@ts-check

let mItems = [];
/**
 * @param {string} itemId
 */
function getItem(itemId) {
    return mItems.find((mItem) => mItem.item_id === itemId);
    // return {
    //     item_id,
    //     power1,
    //     power2,
    //     power3,
    //     power4,
    //     price1,
    //     price2,
    //     price3,
    //     price4,
    // };
}

/**
 * @param {{ getConnection: () => any; }} pool
 */
async function initItems(pool) {
    const connection = await pool.getConnection();
    let [_mItems] = await connection.query('SELECT * FROM m_item');
    mItems = _mItems;
}

module.exports = {
    getItem,
    initItems,
};
