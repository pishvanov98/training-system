<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case "selectOneTems":
        selectOneTems();
        break;
    case 'updateTems':
        updateTems();
        break;
    case 'newTems':
        newTems();
        break;
    case 'delTems':
        delTems();
        break;
    case 'loadTem':
        loadTem();
        break;
    case 'loadSingleTem':
        loadSingleTem();
        break;
    case 'newTems_user':
        newTems_user();
        break;
        case 'updateTems_user':
            updateTems_user();
            break;
            case 'updateTems_userminus':
                updateTems_userminus();
                break;
                case 'loadSingleTem_result':
                    loadSingleTem_result();
                    break;
                    case 'rendomtem':
                        rendomtem();
                        break;
                        case 'sum_test':
                            sum_test();
                            break;
                            case 'updatepraktika_user':
                                updatepraktika_user();
                                break;
                                case 'updatepraktika_userminus':
                                    updatepraktika_userminus();
                                    break;
                                    case 'sumtest':
                                        sumtest();
                                        break;
                                        case 'loadcabinet':
                                            loadcabinet();
                                            break;
                                            case 'result_user':
                                                result_user();
                                                break;
                                                case 'delete_user_tem':
                                                    delete_user_tem();
                                                    break;
                                                    case 'newtable':
                                                        newtable();
                                                        break;
                                                        case 'newcreatetable':
                                                            newcreatetable();
                                                            break;
       
  
}
?>
