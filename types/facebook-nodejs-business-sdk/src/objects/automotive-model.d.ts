import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AutomotiveModel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AutomotiveModel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        applinks: "applinks";
        automotive_model_id: "automotive_model_id";
        availability: "availability";
        body_style: "body_style";
        category_specific_fields: "category_specific_fields";
        currency: "currency";
        custom_label_0: "custom_label_0";
        custom_label_1: "custom_label_1";
        custom_label_2: "custom_label_2";
        custom_label_3: "custom_label_3";
        custom_label_4: "custom_label_4";
        custom_number_0: "custom_number_0";
        custom_number_1: "custom_number_1";
        custom_number_2: "custom_number_2";
        custom_number_3: "custom_number_3";
        custom_number_4: "custom_number_4";
        description: "description";
        drivetrain: "drivetrain";
        exterior_color: "exterior_color";
        finance_description: "finance_description";
        finance_type: "finance_type";
        fuel_type: "fuel_type";
        generation: "generation";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        interior_color: "interior_color";
        interior_upholstery: "interior_upholstery";
        make: "make";
        model: "model";
        price: "price";
        sanitized_images: "sanitized_images";
        title: "title";
        transmission: "transmission";
        trim: "trim";
        unit_price: "unit_price";
        url: "url";
        visibility: "visibility";
        year: "year";
    }>;
    static get ImageFetchStatus(): Readonly<{
        direct_upload: "DIRECT_UPLOAD";
        fetched: "FETCHED";
        fetch_failed: "FETCH_FAILED";
        no_status: "NO_STATUS";
        outdated: "OUTDATED";
        partial_fetch: "PARTIAL_FETCH";
    }>;
    static get Visibility(): Readonly<{
        published: "PUBLISHED";
        staging: "STAGING";
    }>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getOverrideDetails(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AutomotiveModel>;
}
